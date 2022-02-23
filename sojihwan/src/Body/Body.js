import React from "react";
import '../Body/Body.css'

function Body(){
  const Clicked = () =>{
      var beg = document.getElementsByClassName("png");
      beg.style.

  }
  return(
    <div className="body-table">
      <table border='1' className='type10'>
        <thead>
          <tr>
            <th scope="cols">제목</th>
            <th scope="cols">만든 기간</th>
            <th scope="cols">요약</th>
            <th>정보</th>
          </tr>
        </thead>
        <tbody>
            <tr className="even">
              <td scope="row">Youlist</td>
              <td scope="row">2021-10-18~ing</td>
              <td scope="row">자작 유튜브 모음 사이트</td>
            </tr>
            <tr className="even">
              <td scope="row">rush hour</td>
              <td scope="row">2021-09-18~ing</td>
              <td scope="row">러시 아워 게임 사이트</td>
              <td><img src="Img/rush_hour_now.png" className="png" onClick={Clicked}/></td>
            </tr>
            <tr className="even">
              <td scope="row">사진</td>
              <td scope="row">2020-03-18~ing</td>
              <td scope="row">사진 모음 사이트(by jiwan)</td>
              <td><button>이동</button></td>
            </tr>
            <tr className="even">
              <td scope="row">my 유튜브</td>
              <td scope="row">R.I.P</td>
              <td scope="row">유튜브 동영상(현재 유튜브 자체 편집기능이 사라져서 동영상 2개(초3떄))</td>
              <td><a href="https://www.youtube.com/channel/UC4yhSBygUqX0VFr3W6FTokw"><button>이동</button></a></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Body;