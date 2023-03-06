export type Blog = {
  id: string,
  createdAt: string,
  updatedAt: string,
  title: string,
  content: string,
  eyecatch: EyeCatch
}

export type EyeCatch = {
  url: string,
  height: number,
  width: number
}