export const createIconPathsMarkup = (paths: any) => {
  return { __html: paths.length && paths.map((path: any) => path) }
}
