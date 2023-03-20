import { FileHandle } from "./file-handle.model";

export interface ManageProfileInfo {
  userId: number,
  pan: number,
  phone: string,
  panImage: FileHandle[],
  aadhar: number,
  aadharImage: FileHandle[]
}
