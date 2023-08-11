const result = fetch(
  "https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=qSSreNvhgqXTKW%2FALIPK%2FDyuZSuKCqXI1AjmzCL7wNDMC3YMXaxGQcpxLaO%2BuC4Td2IL2ywb2hxhl%2BdRREyCDQ%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=2023-08-05"
)
  .then(function (res) {
    // console.log(res);
    return res.json();
  })
  .then(function (result) {
    // console.log(result.items);
    let arr = [];
    const aaa = [];
    let ob = {
      gubun: "",
      incDec: 12,
    };
    result.items.forEach(function (el) {
      ob = {
        gubun: el.gubun,
        incDec: el.incDec,
      };
      aaa.push(ob);
    });
    // aaa.sort((a, b) => {
    //   // return parseInt(a.incDec) - parseInt(b.incDec);
    //   return a.gubun - b.gubun;
    // });
    // aaa.gubun.sort();
    // console.log(aaa[0].gubun);
    // console.log(aaa.gubun);

    console.log("🐽🐽🐽🐽🐽🐽🐽🐽🐽🐽🐽🐽🐽🐽🐽🐽");
    console.log(arr);
  });

// console.log(result);
