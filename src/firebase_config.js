import firebase from 'firebase'
  
  const firebaseConfig = {
    apiKey: "AIzaSyC6ZESrEqLorRvUUsKbUcrXN8r47aWt1m4",
    authDomain: "safe-zone-backup.firebaseapp.com",
    databaseURL: "https://safe-zone-backup-default-rtdb.firebaseio.com",
    projectId: "safe-zone-backup",
    storageBucket: "safe-zone-backup.appspot.com",
    messagingSenderId: "907993750058",
    appId: "1:907993750058:web:85f5733c133e43fab68153",
    measurementId: "G-77N1Z5QW34"
  };
  // Initialize Firebase  
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// GoogleAuthProvider 클래스를 authentication 라이브러리에서 사용할 수 있도록 불러오는 코드.

provider.setCustomParameters({prompt: 'select_account'});
// signIn이랑 authentication을 위해서 GoogleAuthProvider를 사용할 때마다 구글 팝업을 항상 띄우기를 원한다는 의미이다.

export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup 메소드는 여러 파라미터를 받을 수 있다. 트위터, 페이스북, 깃허브 등으로도 로그인이 필요할 수도 있으므로.
// 여기에서는 google로 signIn할 것이기 때문에, 파라미터로 위에서 정의한 provider를 넣어준다.

export default firebase;
// 혹시 전체 라이브러리가 필요할지도 모르기 때문에 firebase도 export 해준다.