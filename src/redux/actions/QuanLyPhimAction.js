import { QuanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachPhimAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      //sử dụng tham số
      const result = await QuanLyPhimService.layDanhSachPhim(tenPhim);

      //Sau khi lấy dữ liệu từ api về => redux (reducer)
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
