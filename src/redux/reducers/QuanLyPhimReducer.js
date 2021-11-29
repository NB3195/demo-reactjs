import { SET_DANH_SACH_PHIM } from "../actions/types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 1320,
      tenPhim: "Ad Astra 3",
      biDanh: "ad-astra-3",
      trailer: "https://www.youtube.com/watch?v=P6AaSMfXHbA",
      hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/ad-astra_gp07.jpg",
      moTa: "A paranoid thriller in space that follows Roy McBride (Brad Pitt) on a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.",
      maNhom: "GP07",
      ngayKhoiChieu: "2021-07-24T14:20:30.167",
      danhGia: 10,
    },
  ],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
