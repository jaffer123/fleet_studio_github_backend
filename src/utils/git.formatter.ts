export function transformCommitData(input: any): any {
    return {
      oid: input.sha,
      message: input.commit.message,
      author: {
        name: input.commit.author.name,
        date: input.commit.author.date,
        email: input.commit.author.email,
      },
      committer: {
        name: input.commit.committer.name,
        date: input.commit.committer.date,
        email: input.commit.committer.email,
      },
      parents: input.parents.map((parent: any) => ({
        oid: parent.sha,
      })),
    };
  }

export function transformCommitDiff(input: any): any {
  const changeKind = "MODIFIED"; 
  const fileChanges = input.files.map((file: any) => {
    const hunks: any[] = [];

    // Split the patch into lines and process each line
    const patchLines = file.patch.split("\n");
    let currentHunk: any | null = null;
    let baseLineNumber = 0;
    let headLineNumber = 0;

    patchLines.forEach((line: string) => {
      if (line.startsWith("@@")) {
        if (currentHunk) {
          hunks.push(currentHunk);
        }
        const [header, baseLine, headLine] = line.split(" ");
        baseLineNumber = parseInt(baseLine.split(",")[0].substring(1), 10);
        headLineNumber = parseInt(headLine.split(",")[0].substring(1), 10);
        currentHunk = {
          header,
          lines: [],
        };
      } else if (currentHunk) {
        currentHunk.lines.push({
          baseLineNumber: baseLineNumber++,
          headLineNumber: headLineNumber++,
          content: line,
        });
      }
    });
    if (currentHunk) {
      hunks.push(currentHunk);
    }

    return {
      changeKind,
      headFile: { path: file.filename },
      baseFile: { path: file.filename },
      hunks,
    };
  });

  return fileChanges;
}