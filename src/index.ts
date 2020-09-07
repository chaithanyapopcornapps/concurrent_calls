import axios, { AxiosResponse } from "axios";
let start = 0;
let url = "https://jsonplaceholder.typicode.com/photos";
let options = {
  params: {
    _start: start,
    _limit: 5,
  },
};
const makeReq = () => {
  let return_req = axios.get(url, options);
  start += 5;
  return return_req;
};
let promises: Promise<AxiosResponse<any>>[] = [];
for (let i = 0; i < 800; i++) {
  promises.push(makeReq());
}
let results: any[] = [];
const do_stuff = async () => {
  await axios.all(promises).then(
    axios.spread((...args) => {
      args.forEach((element) => {
        results.push(...element.data);
      });
    })
  );
  console.log(results.length);
  // console.log(results);
};
do_stuff();
