import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
    const router = useRouter();

    const [나의함수] = useMutation(나의그래프큐엘셋팅);

    const onClickSubmit = async () => {
        try {
            //try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고, catch 부분 코드 실행
            const result = await 나의함수({
                variables: {
                    // variables => $ 역할을 함
                    writer: "훈이", // 변수 입력
                    title: "안녕하세요!!",
                    contents: "반갑습니다.",
                },
            });
            console.log(result);
            console.log(result.data.createBoard.number);

            // router.push(
            //     "/section05/05-05-dynamic-routing-board-mutation-moved" + result.data.createBoard.number
            // );
            router.push(
                `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
            );
        } catch (error) {
            alert(error.message);
        }
    };

    // 한 중일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}