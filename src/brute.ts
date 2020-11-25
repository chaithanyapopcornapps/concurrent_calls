import axios, { AxiosResponse } from "axios";
let start = 0;
let url = "https://jsonplaceholder.typicode.com/photos";
let options = {
  params: {
    _start: start,
    _limit: 5,
  },
};
const final_ans: any = [];
// learning git , is amazing
const makeReq = () => {
  let result = axios.get(url, options);
  result
    .then((response) => {
      final_ans.push(...response.data);
    })
    .catch((e) => {
      console.log(e.message);
    });
  return result;
};
const promises = [];

for (let i = 0; i < 100; i++) {
  promises.push(makeReq());
  start += 5;
}
axios.all(promises).then((response) => {
  console.log(final_ans.length);
});
