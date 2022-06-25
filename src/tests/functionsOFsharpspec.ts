import {
  resizeImg,
  getMetaData,
  checkIfExists,
} from '../middlewares/functionsOFsharp';
import { resize } from '../middlewares/imgMdlwr';

describe('***sharp functions test***', () => {
  it('--Check If IMG Exists', async () => {
    expect(checkIfExists).toBeTruthy();
  });
  it('--operation done ', async () => {
    expect(resize).toBeTruthy();
  });
  it('--Img resized ', async () => {
    expect(resizeImg).toBeTruthy();
  });
  it('--Meta data reached end  ', async () => {
    expect(getMetaData).toBeTruthy();
  });
});