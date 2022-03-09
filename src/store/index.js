// index.js 루트 리듀서 역할 : 많은 서브 리듀서들을 한 곳에 모아놓은 곳
import { combineReducers } from "redux";
import score from "./modules/score";

export default combineReducers({
  // 서브 리듀서 ...
  score,
});
