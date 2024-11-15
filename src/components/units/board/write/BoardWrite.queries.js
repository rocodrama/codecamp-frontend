import { gql } from "@apollo/client";

export const 나의그래프큐엘셋팅 = gql`
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
