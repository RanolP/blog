# 0005: 웹 프레임워크 결정

## 문제 상황

블로그를 짤 때 쓸 웹 프레임워크를 결정해야 한다.

## 결정

### 고려했던 대안

#### React

- **장점**: 생태계가 아주 큼, 프로그래밍 언어 기반
- **단점**: 무거울 수 있음

#### Preact

- **장점**: React의 장점을 흡수, 가벼움
- **단점**: 일부 React 호환성 이슈에 맞닥뜨릴 수 있음

#### Vue

- **장점**: 템플릿 기반, 러닝 커브 낮음(Vue 3는 다르다는 이야기가 있음)
- **단점**: 템플릿 기반, 양방향 데이터 바인딩

#### Svelte

- **장점**: 템플릿 기반, 러닝 커브 낮음
- **단점**: 템플릿 기반, 양방향 데이터 바인딩, 작은 생태계

#### Solid

- **장점**: 반응형 프로그래밍 기반 최적화
- **단점**: 아주 작은 생태계

### 최종 결정

Preact를 사용하도록 한다.

먼저, React식의 사고 방식에 익숙하다.

둘째, 생태계가 충분히 성숙한 React의 생태계를 활용할 수 있다.

## 결과

Preact 기반으로 프론트엔드 라이브러리 및 앱의 개발을 진행한다.