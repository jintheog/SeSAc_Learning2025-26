# 깃 개념

![깃로고](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2aRJR6dWUGsjhkUzKkGp-3787npBEJcJblg&s)

## 스냅샷
- 마치 폴라로이드 카메라로 풍경을 기록하듯이 파일의 상태를 기록하는 시스템
- 한 번 기록하면 변경할 수 없다

## git init
- "이 폴더를 이제부터 Git으로 버전 관리할 거야" 라고 선언하고, 버전 관리에 필요한 환경을 만들어주는 명령어
- 내가 작업할 폴더 안에 .git 폴더를 새로 만든다. 
  여기 안에는 커밋 기록, 브랜치, 스테이징 영역, 설정 정보가 다 들어감
> `.git` 폴더란 : 이 폴더가 바로 Git 저장소(Repository)의 본체. 
- 우리가 만드는 버전 정보, 변경 이력, 설정 등 Git이 프로젝트를 관리하는 데 필요한 모든 데이터가 이 .git 폴더 안에 저장됨

> 그냥 폴더는 “메모장” 같은 공간일 뿐. git init을 하면 “비밀 일기장(.git)”을 달아주는 거라, → 앞으로 무슨 일이 있었는지 시간별로 기록할 수 있음.

## 3가지 영역
   ### 1. 작업 트리 (working tree)
- Git이 관리하는 프로젝트
- 가장 최근 커밋(저장소)과 비교하여 수정된(변경된) 파일의 영영
- 의 실제 디렉토리(사용자가 직접 보고 수정하는 공간).
- 내가 실제로 수정한 파일들이 있는 곳. 내가 보고 수정하는 **프로젝트 디렉토리**
- VSCode, 메모장 등에서 파일을 수정하면 전부 여기에서 일어남.
- 아직 Git에 저장된게 아니라 그냥 "현재 수정된 상태"
  
### 2. 스테이징 영역 (staging area)
- 저장소에 기록하기 위해 임시로 선택된 파일의 영역
- 커밋 하기 전에 잠시 올려두는 대기 공간. 다음 커밋에 포함할 파일들을 모아두는 준비 공간
- `git add 경로/파일명` 하면 → 수정한 파일이 이곳으로 복사됨. 커밋할 파일이 이 영역으로 올라옴.
- _다음 커밋에 포함될 후모 목록_ 을 관리하는 중간 공간. 
- 한꺼번에 수정 했어도 **원하는 파일만 골라 커밋** 할 수 있도록 하는 영역. 
- 
### 3. 저장소 (local repository)
- `git commit` 하면  -> 스테이징 영역에 있던 파일이 영구히 저장됨. 
- 이력 (history) 으로 남아서 `git log`로 확인 가능
- `.git` 폴더 안에 있음. 
  
---
# 깃 명령어
## 변경된 파일을 스테이징 영역으로 이동하는 명령어
변경 (modified) -> 스테이징 (Staged)
  - `git add 경로/파일명` : 변경된 파일을 선택해서 스테이징 영역으로 이동
  - `git add .` : 모든 변경된 파일을 스테이징 영역으로 이동

## 스테이징 영역에 있는 파일을 기록(커밋)하는 명령어
스테이징 (staged) -> 커밋 (commited)
  - `git commit` : 커밋 하는 명령어
  - `git commit -m "커밋 메세지"` : 스테이징 영역에 있는 파일을 로컹 저장소에 저장
  - 커밋 메세지 (commit message) : 개발을 햇으면 개발을 했다고 알려줘야함. 커밋 메세지를 통해서 뭘 했다라는걸 나타내야함. 
    - 커밋 메시지 컨벤션이 따로 있음

## 현재 파일 상태를 출력 하는 명령어
- `git status` : git 프로젝트의 현재 상태를 출력
- `git diff <파일명>` : 특정 파일의 변경 내용출력
- `git diff --staged` : 스테이징 영역과 최근 커밋의 차이 출력
- `git log` : 커밋 기록 확인 (잘 쓰지 않음)
---

# VSCode Git GUI
VSCode에서 Source Control을 통해 git을 제어 할 수 있다
![소스컨트롤텝위치](image.png)
![git_add_버튼_위치](image-1.png)
> git add 버튼 처럼 스테이징 영역으로 이동시킴
---
## git add . 명령어 버튼 <한번에 모든 파일을 스테이징 영역으로 이동>
![saveAllChanges버튼위치](image-3.png)

---
# .gitignore
## 어떤 파일인가? 역할이 무엇인가?
- Git에게 **이 파일들은 추적하지마라** 라고 알려주는 설정 파일.
- 버전 관리할 필요 없는 파일(임시 파일, 로그, 빌드 산출물, 개인 설정 파일등)을 Git 저장소에서 제외할 때 사용.
#### 역할 :
- 불필요한 파일이 Git 저장소에 올라가는 걸 방지. 
- 협업 시 팀원 마다 다른 **환경 설정 파일 (.env, IDE 설정, OS 캐시 파일등)**이 올라가 충돌하는 걸 막음. 
- 보안상 민감한 정보 (**API Key, 비밀번호, 인증서)가 실수로 커밋 되는 것을 막음.
  
## .gitignore의 주의사항은 무엇인가?
### 주의할 점

처음 부터 gitignore에 안넣고 커밋을 해서 저장소로 옮긴 뒤에 다시 gitignore에 넣으려고 하면 작업트리로 가버린다. 

- 한번이라도 저장소에 가게된 파일은 gitignore에 등록을 해도 흐름을 벗어 날 수가 없다.

- 이미 추적 중인 파일은 .gitignore에 추가해도 무시되지 않음.
  - 해결: git rm --cached 파일명으로 추적에서 제거해야 함.

- .gitignore는 로컬뿐 아니라 저장소에 같이 올라가야 팀원 전체에 적용됨.

- 너무 광범위하게 작성하면 필요한 파일까지 무시될 수 있음(예: *.json 전체 무시).

- 보안 민감 파일은 가능하면 아예 커밋하기 전에 .gitignore에 추가해야 안전.

## gitignore.io는 어떤 서비스인가?
무엇을 gitignore에 넣어야 하는지 넣지 말아야 하는지 판단 하기 위한 사이트
#### 개발 환경별(언어, IDE, OS)로 필요한 .gitignore 템플릿을 자동 생성해주는 서비스.

# 프로젝트를 시작 할때 가장 먼저 해야 하는것

저장소에 포함되면 안되는 파일들

![gitignore.io웹기본검색창
화면](image-4.png)

> 본인 환경에 맞게 검색

```md
# Created by https://www.toptal.com/developers/gitignore/api/visualstudiocode,react,macos,windows
# Edit at https://www.toptal.com/developers/gitignore?templates=visualstudiocode,react,macos,windows

### macOS ###
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon


# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

### macOS Patch ###
# iCloud generated files
*.icloud

### react ###
.DS_*
*.log
logs
**/*.backup.*
**/*.back.*

node_modules
bower_components

*.sublime*

psd
thumb
sketch

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

# Local History for Visual Studio Code
.history/

# Built Visual Studio Code Extensions
*.vsix

### VisualStudioCode Patch ###
# Ignore all local history of files
.history
.ionide

### Windows ###
# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

# End of https://www.toptal.com/developers/gitignore/api/visualstudiocode,react,macos,windows

```
↑ 이런식으로 나옴

![.gitignore설정파일에에추가한화면](image-5.png)
↑이렇게 .gitignore 파일에 붙여넣기 한다 