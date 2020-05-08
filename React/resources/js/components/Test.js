import React, {Component} from 'react';
import '../components/css/Test.css';
class Test extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            header : "header",
        };
    }
    handle(text){
        this.setState({
            header: "header update"
        });
    }

    render(){
        return(
            <div className="pdt_contents qna">
                <div className="fr default_size">
                    <button type="button" className="btn black qna_write_open">문의하기</button>
                </div>
                <div id="qaList" className="default_size">
                    <table className="cols tbl_qna my-qna">
                    <colgroup><col style={{width: '98px'}} /><col /><col style={{width: '115px'}} /></colgroup>
                    <tbody>
                        <tr className="disabled">
                        <td>
                            <em className="icon_finish">답변완료</em>
                        </td>
                        <td className="question">
                            <p className="tit">
                            <a href="javascript:alert('비밀글 입니다');">
                                재입고 문의
                                <span className="icon_rock">비공개</span>
                            </a>
                            </p>
                            <span className="name">jyty***</span>
                        </td>
                        <td className="date">2020. 05. 06</td>
                        </tr>
                        <tr className="question_detail">
                        <td colSpan={3}>
                            <div className="cont">
                            <div className="ask">
                                <strong className="tit_sub">질문</strong>
                                <p className="txt">모델 사이즈 알려주세요</p>
                            </div>
                            <div className="answer">
                                <strong className="tit_sub">답변</strong>
                                <p className="txt">
                                <span className="date">2020.05.04 06:30</span>
                                안녕하세요, 고객님!  저희  제품에 관심 가져주셔서 감사드립니다.<br /><br />                                            해당 상품 모델이 착용한 사이즈는 남자 모델 L사이즈, 여자모델 M 사이즈입니다.<br />(총장/어깨너비/가슴단면/소매길이)<br />S : 69cm/cm/49cm/54.5cm/23.5cm<br />M : 71cm/50.5cm/57cm/24.5cm<br />L : 73cm/52cm/59.5cm/25.5<br /><br />
                                궁금하신 사항은 언제든지 문의 부탁드립니다.<br />감사합니다.<br />                                      </p>
                            </div>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    {/* <ul className="pagination mb60">
                    <li className="first"><a href="javascript:;" style={{cursor: 'default'}} title="처음">first</a></li>
                    <li className="prev"><a href="javascript:;" style={{cursor: 'default'}}>prev</a></li>
                    <li className="active"><a href="javascript:;" style={{cursor: 'default', margin: '0 5px 0 5px'}} title={1}>1</a></li>
                    <li><a href="javascript:WCK_COMMON_VIEWPRODUCT_RENEWAL_FN.qaList('2', '300904406', '');" style={{margin: '0 5px 0 5px'}} title={2}>2</a></li>
                    <li className="next"><a href="javascript:;" style={{cursor: 'default'}}>next</a></li>
                    <li className="last"><a href="javascript:WCK_COMMON_VIEWPRODUCT_RENEWAL_FN.qaList('2', '300904406', '');" title="마지막">last</a></li>
                    </ul> */}
                </div>
            </div>
        )
    }
}
export default Test;