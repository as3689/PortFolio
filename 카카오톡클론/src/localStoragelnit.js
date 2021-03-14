const CHAT_NAME = ["카카오톡","마네키네코","뿌까","어피치"];
const CHAT_COUNT = [1,2,3,4];

localStorage.clear();
for(i=0; i<CHAT_NAME.length; i++) {
    localStorage.setItem(CHAT_NAME[i],CHAT_COUNT[i]);
}