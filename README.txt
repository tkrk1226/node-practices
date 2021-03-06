Node Practices

1. 패키지 (package)
    - 완전한 applcation(node daemon, babel, webpack)
    - 프로젝트에서 사용하는 모듈 (라이브러리)

2. 의존성
    - 개발하는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 패키지
    - 일반 의존성
        - 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함되어야 함
        - $[project-ex01] npm i ...

    - 개발 의존성
        - 개발에 필요하거나 도움이 되는 패키지(dev tool) 배포에 포함되지 않는다.
        - $[project-ex01] npm i -D ...

3. 패키지 설치 방식 - 외부 라이브러리
    1) 전역(global) 설치 : 여러 프로젝트에서 공통으로 사용되는 도구 설치 
    2) 지역(project local) 설치 : 특정 프로젝트에 종속적인 도구나 라이브러리 
    3) 패키지 설치
        - $[project-ex01] npm i ejs (local, general dependency)
        - $[project-ex01] npm i -D nodemon (local, general dependency)
        - $[project-ex01] npm i -g gulp (global) , npm gulp --version
            3-1) 패키지 설치, 삭제 확인 (실행)
                - $[project-ex01] npx gulp --version (version, downloading check)
    4) 패키지 삭제
        - $[project-ex01] npm un ejs (local install 삭제)
        - $[project-ex01] npm un -g gulp (global install 삭제)

4. Node(JavaScript) Project(BE/FE Application, Package) 생성 방법
    1) 프로젝트 생성 (mkdir)
    2) 프로젝트 이동 (cd)
    3) 프로젝트 초기화 : 프로젝트 페니페스트 파일(package.json) 생성
        - $[project-ex02] npm init

5. Module
    1) 코어 모듈 (fs, os, ... node에서 제공해주는 모듈)
    2) 파일 모듈 : 파일 경로로 불러와서 모듈 안에 
    3) npm 모듈 : npm을 통해서 node_modules에 설치하고 사용하는 모듈
        - 원격 배포
        - 로컬 배포

6. npmjs.com의 npm registry에 내 패키지 배포하기 (생략, https://github.com/kickscar/javascript-practices/tree/main/TechNotes/javascript-practices/11.Development%20Environments 참고)
(과제 개념으로 해보는 것 추천!!!)

7. helloweb-ex01 (pure node.js) : 웹애플리케이션 만들어보기
    1) app01: http: core module 기반
    2) app02: http, fs: core module 기반
    3) app03: connect, serve-static: npm package 기반
    4) app04: connect, serve-static: connect-route: npm package 기반

8. helloweb-ex02 (express) : 웹애플리케이션 만들어보기

9. node로 backEnd 만들기 -> 생략이나 해보는 것 매우 중요





