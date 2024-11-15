import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [나의함수] = useMutation(나의그래프큐엘셋팅);
    const [updateBoard] = useMutation(UPDATE_BOARD);

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
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    };

    const onClickUpdate = async () => {
        const result = await updateBoard({
            variables: {
                number: Number(router?.query?.number),
                writer,
                title,
                contents,
            },
        });
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                isEdit={props.isEdit}
            />
            <div>$$$$$$$$$$$$ 여기는 컨테이너입니다. $$$$$$$$$$$$$$$$$$$$$$$</div>
        </div>
    );
}
