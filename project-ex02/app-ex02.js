/**
 * posco-ict-math npm 모듈 테스트 (모듈 패키지 : 로컬 배포)
 * 
 * 로컬 패키지 설치
 * $[project-ex02] npm i ../posco-ict-math (npm 원격 레지스트리 패키지 네임이 전세계에서 유일해야한다.)
 * 
 * 명령으로 설치 후 테스트 할 것.
 * 
 */

 var poscoMath = require("posco-ict-math"); 

 console.log(poscoMath.sum(10,20,30,40,50));
 console.log(poscoMath.max(10,20,30,40,50));
 console.log(poscoMath.min(10,20,30,40,50));

