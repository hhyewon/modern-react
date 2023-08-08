import React, {useState, useRef} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs;  // 비구조화 할당

    // react에서 객체를 업데이트하게 될 때에는 기존 객체를 수정하면 안되고, 새로운 객체를 만들어 새 객체에 변화를 주어야한다.
    // >> 다른 lifecycle 메소드들에서 직접 지정한 state에 대해 참조가 일어날 때 컴포넌트 전체 로직이 깨질 여지가 있기 때문
    // ex) inputs[name] = value;                   ---(X)
    // ex) setInputs({ ...inputs, [name]: value}); ---(O)
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    const onReset = (e) => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    }

    // 특정 DOM을 선택해야 하는 상황에서 사용
    const nameInput = useRef();


    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={name} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;