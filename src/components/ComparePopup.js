import React from "react";
import Popup from "./Popup";
import styled from "styled-components";
import CompareTable from "./CompareTable";

function ComparePopup({ isOpen, setOpen, deals }) {
  return (
    <Popup isOpen={isOpen} setOpen={setOpen}>
      <S.Container>
        {deals?.map((deal) => (
          <S.TableWrapper key={deal.deal_id}>
            <S.Head>
              <div className="head-inner">
                <img className="head-inner-logo" src={deal.provider_logo_image_url} alt="" />

                <div className="head-inner-content">
                  <p className="head-inner-content-title">{deal.provider_name}</p>
                  <p className="head-inner-content-subtitle">{deal.deal_name}</p>
                </div>
              </div>

              <button className="primary-btn">Continue</button>
            </S.Head>

            <CompareTable
              provider_rating={deal.provider_rating}
              monthly_price={deal.monthly_price}
              monthly_price_type={deal.monthly_price_type}
              internet_speed={deal.internet_speed}
              set_up_cost={deal.set_up_cost}
              contract_info={deal.contract_info}
              data_limits={deal.data_limits}
              yearly_cost={deal.yearly_cost}
              yearly_savings={deal.yearly_savings}
            />
          </S.TableWrapper>
        ))}
      </S.Container>
    </Popup>
  );
}

export default ComparePopup;

const S = {};

S.Container = styled.div`
  display: flex;
  width: 100%;
`;

S.TableWrapper = styled.div`
  width: 100%;
`;

S.Head = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .head-inner {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .head-inner-logo {
    width: 50px;
    height: auto;
  }

  .head-inner-content {
    margin-left: 15px;
  }
  .head-inner-content-subtitle {
    font-size: 12px;
  }

  button {
    width: 50%;
  }
`;
