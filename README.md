##### top
# Vue Test Utils 스터디

``Vue Test Utils`` 는 Vue 프레임워크의 공식 테스트 라이브러리 입니다.

함께 사용할 테스트 프레임워크는 ``Jest`` 입니다.

테스트를 위한 환경설정은 Vue CLI 로 프로젝트 생성 시, Test 항목을 선택하면 의존성 설치와 함께 설정해 줍니다.

<br/>

01. [Jest의 기본](#01)

02. [expect() 함수의 Matchers: ``JestMatchers``](#02)



<br/>

[🔺 Top](#top)

<hr/><br/>



##### 01
## 01. Jest의 기본

Jest 는 Javascript 의 대표 테스트 프레임워크 중 하나 입니다.

Jest 의 테스트 유닛 작성 구조는 다음과 같습니다.

* ``describe()``: 테스트 개요 (중첩 가능)
* ``it()``: 테스트 케이스

<br/>

아래 코드는 describe() 와 it() 을 사용한 예시 입니다.

```javascript
// <rootDir>/tests/unit/myTest.spect.js

describe("테스트 개요 입니다.", () => {
  it("테스트 케이스 01", () => {
    // 테스트 코드
  });

  it("테스트 케이스 02", () => {
    // 테스트 코드
  });
});
```

<br/>

이제 실제 테스트 케이스를 Assertion 하는 방법에 대해 알아보겠습니다.

``it()`` 의 callback 으로 넘겨주는 함수가 실제 테스트가 되는 코드이며, ``expect()`` 함수를 사용하여, 테스트 통과 여부를 검사할 수 있습니다.

아래 코드는 ``expect()`` 사용 예시 입니다.

```javascript
// <rootDir>/tests/unit/myTest.spect.js

describe("테스트 개요", () => {
  it("1 + 1 === 2", () => {
    expect(1 + 1).toBe(2);
  });
});
```



<br/>

[🔺 Top](#top)

<hr/><br/>



##### 02
## 02. expect() 함수의 Matchers: ``JestMatchers``

``expect()`` 함수는 ``JestMatchers`` 객체를 반환 합니다.

``JestMatchers`` 객체에는 Assertion 을 위한 여러가지 메서드를 제공하고 있습니다.

다음 항목들은 ``JestMatchers`` 객체의 Assertion 메서드 입니다. (대상: expect(대상))

* toBe(인자): ``expect(대상)`` 의 대상값을 검사합니다. ``대상 === 인자``일 때, 테스트를 통과 합니다.
* toBeTruthy(): ``대상 === true`` 일 때, 테스트를 통과 합니다.
* toBeFalsy(): ``대상 === false`` 일 때, 테스트를 통과 합니다.
* toBeDefined(): ``대상 !== undefined`` 일 때, 테스트를 통과 합니다.
* toBeUndefined(): ``대상 === undefined`` 일 때, 테스트를 통과 합니다.
* toBeNull(): ``대상 === null`` 일 때, 테스트를 통과 합니다.
* toBeNaN(): ``대상 === "NaN"`` 일 때, 테스트를 통과 합니다.
* toBeInstanceOf(인자): ``대상 instanceof 인자`` 일 때, 테스트를 통과 합니다.
* toBeCloseTo(인자): ``대상(부동소수점) === 인자(부동소수점)`` 일 때, 테스트를 통과 합니다. (부동소수점 연산 오차를 고려한 비교 입니다.)
* toContain(인자): ``대상(HTML요소) 자식요소 === 인자(HTML 문자열)`` 일 때, 테스트를 통과 합니다.
* toEqual(객체): ``대상(객체)의 모든 속성 === 인자(객체)의 모든 속성`` 일 때, 테스트를 통과 합니다. (Deep 검사)
* toStrictEqual(객체): ``대상(객체)의 모든 속성 === 인자(객체)의 모든 속성`` 이며, ``동일한 생성자`` 일 때, 테스트를 통과 합니다. (Deep 검사)



<br/>

[🔺 Top](#top)

<hr/><br/>



##### 03