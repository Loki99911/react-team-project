import styled from 'styled-components';

export const FormLayout = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  margin-top: 50px;
  border-radius: 30px;
  background-color: var(--auth-form-background-color);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  color: var(--general-text-color);


  @media screen and (min-width: 768px) {
    width: 425px;
    padding: 55px 85px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 160px;
  }
`;

export const FormText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: var(--auth-form-validation-error-color);
`;

export const LoginLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  color: var(--general-header-color);
  margin-bottom: 12px;

  &:last-of-type {
    margin-top: 32px;
  }
`;

export const LoginInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  background-color: var(--auth-form-input-background-color);
  border: none;
  width: 100%;
  height: 52px;
  padding: 0 20px;
  border-radius: 30px;
`;
export const LoginBtnBlock = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;
`;

export const LoginBtn = styled.button`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  width: 100%;
  padding: 0;
  margin: 0;
  color: var(--table-description-text-color);
  background-color: var(--auth-background-top-part-color);
  height: 44px;
  border: none;
  border-radius: 16px;
  filter: var(--auth-form-button-shadow);
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: var(--auth-background-bot-part-color);
    background-color: var(--general-accent-background-color);
  }
`;

export const GoogleBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 19px;
  margin: 0;
  background-color: var(--auth-form-input-background-colo);
  border: none;
  border-radius: 26px;
  transition: background-color 250ms linear;

  &:hover {
    background-color: var(--general-accent-background-color);
  }
`;

export const ErrorText = styled.span`
  display: flex;
  position: absolute;
  top:80px;

  &:last-of-type {
    top:190px;
  }
`;

