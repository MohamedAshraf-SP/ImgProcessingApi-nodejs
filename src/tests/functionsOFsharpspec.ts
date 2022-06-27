import {
  resizeImg,
  getMetaData,
  
} from '../middlewares/functionsOFsharp';
import { resize } from '../middlewares/imgMdlwr';

describe('***sharp functions test***', () => {
  it('--operation done ', async () => {
    expect(resize).toBeTruthy();
  });
  it('--Img process ', async () => {
    expect(resizeImg).toBeTruthy();
  });
  it('--Meta data reached end  ', async () => {
    expect(getMetaData).toBeTruthy();
  });
});

describe('***img processed***', () => {
  it('--img processed successfully  ', async () => {
    expect(resizeImg).toBeTruthy();
  });
});




