import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
    # 타입 결정
    mutation createBoard($writer: String, $title: String, $contents: String) {
        # 변수 받기
        createBoard(writer: $writer, title: $title, contents: $contents) {
            # 불러올 값
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                // variables => $ 역할을 함
                writer, // 변수 입력
                title,
                contents,
            },
        });
        console.log(result);
    };

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    // 한 중일때는 괄호() 필요 없음
    return (
        <div>
            작성자: <input type="text" onChange={onChangeWriter}></input>
            제목: <input type="text" onChange={onChangeTitle}></input>
            내용: <input type="text" onChange={onChangeContents}></input>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    );
}
