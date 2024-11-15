import { RedInput, BlueButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
    return (
        <div>
            <div>@@@@@@@@@@@@@@@@@@@@@@@ 여기는 프리젠터입니다. @@@@@@@@@@@@@@@@@@@@@@@@@@@</div>
            <div>
                작성자: <RedInput type="text" onChange={props.onChangeWriter}></RedInput>
                제목: <input type="text" onChange={props.onChangeTitle}></input>
                내용: <input type="text" onChange={props.onChangeContents}></input>
                <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
                    GRAPHQL-API 요청하기
                </BlueButton>
            </div>
            <div>@@@@@@@@@@@@@@@@@@@@@@@ 여기는 프리젠터입니다. @@@@@@@@@@@@@@@@@@@@@@@@@@@</div>
        </div>
    );
}
