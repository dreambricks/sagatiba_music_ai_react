import styled from "styled-components";

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

export const InfoItem = styled.div`
  background-color: #f9f9f9;
  padding: 12px 16px;
  border-radius: 6px;
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #666;
`;
