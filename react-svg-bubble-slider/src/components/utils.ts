export const createIconPathsMarkup = (paths: any) => {
  return { __html: paths.map((path: any) => path) }
}
