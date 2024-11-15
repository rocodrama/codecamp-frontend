import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";

export default function BoardWrite() {
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

    return (
        <div>
            <div>$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$$$$$</div>
            <BoardWriteUI
                aaa={onChangeWriter}
                bbb={onChangeTitle}
                onChangeContents={onChangeContents}
                onClickSubmit={onClickSubmit}
            />
            <div>$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$$$$$</div>
        </div>
    );
}