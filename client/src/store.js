import { createStore } from 'redux';

var rawInitState = {
    userId: "3000",
    userName: "전승규",
    userGender: "M",
    userPhone: "01033333333",
    userPW: "lorem12",
    notices: [
        { id: 1, title: '중요공지', desc: '카택전 v0.1 런칭' }
    ],
    myRooms: [],
};

function reducer(state = rawInitState, action) {
    var newState, userInRoom;

    if (action.type === 'login') {
        userInRoom = action.userRooms.filter(function(room){
            if (room === null) return false;
            else return true;
        })
        newState = {...state, userId: action.userId, userName: action.userName, userGender: action.userGender, userPhone: action.userPhone, userPW: action.userPW, myRooms: userInRoom}
        return newState;
    }

    // if (action.type === 'join') { //방에 참가
    //     room = state.rooms.filter(function(room){ //room: 참가하고자 하는 방 (참고로 배열)
    //         if(room.id === action.roomId){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //     var joinRoom = room[0];

    //     if (joinRoom.joinedUsers.length === joinRoom.maxNum) { //정원이 다 찬 경우
    //         window.alert("정원이 다 찼습니다.")
    //         return state;
    //     }

    //     if(joinRoom.joinedUsers.indexOf(userId) > -1) { //userId 가 이미 joinedUsers에 있는 경우
    //         window.alert('이미 참여한 방입니다');
    //         return state;
    //     }

    //     joinRoom.joinedUsers.push(userId);
    //     // console.log("joined", room, userId, room.joinedUsers);
    //     newMyRooms = [...state.myRooms, joinRoom];
    //     newState = { ...state, myRooms: newMyRooms };
    //     return newState;
    // }

    // if (action.type === 'quit') { //방 나가기
    //     newMyRooms = state.myRooms.filter(function(myRoom){ 
    //         if (myRoom.id !== action.roomId) return true;
    //         else return false;
    //     });
        
    //     room = state.rooms.filter(function(room){ //room: 나가고자 하는 방 (참고로 배열)
    //         if(room.id === action.roomId) return true;
    //         else return false;
    //     });
    //     var quitRoom = room[0];

    //     var newJoinedUsers = quitRoom.joinedUsers.filter(function (user) { //나간 사람을 제외한 새로운 joinedUsers
    //         if (user === userId) return false;
    //         else return true;
    //     })
        
    //     quitRoom.joinedUsers = newJoinedUsers;
    //     newRooms = state.rooms.filter(function(room){
    //         if(room.id === quitRoom.id) return false;
    //         else return true;
    //     });
    //     newRooms.push(quitRoom);
    //     // console.log("quit", room, userId, room.joinedUsers);
    //     newState = { ...state, rooms: newRooms, myRooms: newMyRooms };
    //     return newState;
    // }
    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
