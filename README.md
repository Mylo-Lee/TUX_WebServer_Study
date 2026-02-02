# 💻 Engineering Portfolio: System & Infra-focused

리눅스 시스템, 임베디드, 그리고 인프라 아키텍처를 공부하는 이호기의 개인 포트폴리오 사이트입니다. 
단순한 UI 구현을 넘어, **Docker 컨테이너 환경에서의 안정적인 서빙과 인프라 가시성**을 목표로 구축되었습니다.

---

## 🚀 Technical Stacks

### Frontend & Language
* **Framework:** React 18 (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS

### Infrastructure & DevOps
* **Web Server:** Nginx
* **Container:** Docker (Multi-stage Build)
* **Environment:** Linux (Ubuntu / Raspberry Pi 64-bit)
* **Protocol:** HTTPS (SSL/TLS) 적용 계획

---

## 🏗 System Architecture

본 프로젝트는 다음과 같은 구조로 배포 및 운영됩니다.

```text
[ Client ] ----(HTTPS/443)----> [ Nginx (Reverse Proxy) ]
                                          |
                                [ Docker Container (Alpine) ]
                                          |
                                [ Vite Build Static Files ]