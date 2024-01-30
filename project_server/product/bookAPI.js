var axios = require("axios");
var xpath = require("xpath");
var dom = require("@xmldom/xmldom").DOMParser;

router.get("/search", async function (req, res, next) {
  console.log("search invoked...");
  const input = req.query.input;
  console.log("input:", input);
  try {
    //응답 성공
    const response = await axios.get(
      `https://www.nl.go.kr/NL/search/openApi/searchKolisNet.do?key=39b4dd4a523f80ea24ba476b79fc50c968db9622ffd612dc415b4176e41ccadd&kwd=${input}&apiType=json&searchType=&sort=`
    );
    console.log(response.status);
    const doc = new dom().parseFromString(response.data, "text/xml");
    const nodes = xpath.select("/root/result/item", doc);
    const result = [];
    for (i = 0; i < nodes.length; i++) {
      var title_node = xpath.select("title_info", nodes[i]);
      const title = title_node[0].firstChild.data;
      var id_node = xpath.select("id", nodes[i]);
      var id = "";
      if (id_node[0].firstChild) {
        id = id_node[0].firstChild.data;
      }
      const result_item = { title: title, id: id };
      console.log(result_item);
      result.push(result_item);
    }
    res.send(result);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
});

module.exports = router;
