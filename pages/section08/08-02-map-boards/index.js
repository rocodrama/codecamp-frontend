import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    console.log(data?.fetchBoards);

    // const myStyles = {
    //     margin: "10px",
    // }

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div>
                    <span>
                        <input type="checkbox"></input>
                    </span>
                    <span style={{ margin: "10px" }}>{el.number}</span>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}
            {/* <div>1번 페이지 이동이 완료되었습니다.</div>
            <div>작성자: {data?.fetchBoards.writer}</div>
            <div>제목: {data?.fetchBoards.title}</div>
            <div>내용: {data?.fetchBoards.contents}</div> */}
        </div>
    );
}
