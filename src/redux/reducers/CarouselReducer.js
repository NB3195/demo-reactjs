import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = [
  {
    maBanner: 1,
    maPhim: 1282,
    hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
  },
];

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrImg = action.arrImg;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
