export enum SnackbarModels {
  FileReady = 'file is ready',
  FileExtensionInvalid = 'file format invalid!',
  FileSizeInvalid = 'file is to big!',
}

export type FileData = {
  name: string
  fileSize: string,
  uploadTime: string,
  data: string;
  id: number;
}
