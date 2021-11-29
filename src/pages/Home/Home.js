import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
// Kết nối redux
import { useSelector, useDispatch } from "react-redux";
import { QuanLyPhimReducer } from "../../redux/reducers/QuanLyPhimReducer";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();

  console.log("propsHome", props);
  // props.match.params;

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function từ redux (thunk)
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu />
      </div>
    </div>
  );
}
