import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-horizontal: 20px;
  padding-top: 32px;
  elevation: 4;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 14px;
  margin-bottom: 12px;
  color: #333333;
`;

export const ItemSeparator = styled.View`
  width: 2px;
  height: 24px;
  background-color: #eaeaea;
  border-radius: 1px;
  margin-left: 15px;
`;

export const ListFooterContainer = styled.View`
  flex: 1 auto;
  align-self: flex-end;
  padding-top: 8px;
`;

export const StyledTouchable = styled.TouchableOpacity`
  width: 80px;
`;

export const StyledTouchableTextContainer = styled.View`
  flex: 1;
`;

export const StyledTouchableText = styled.Text`
  text-align: right;
  color: #00aeef;
  font-family: 'Montserrat-Bold';
  margin-vertical: 12px;
`;

export const DateFilterTextContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const DateFilterTouchableText = styled.Text`
  color: #00aeef;
  font-family: 'Montserrat-Bold';
`;

export const DateFilterText = styled.Text`
  color: #333333;
  font-family: 'Montserrat-Bold';
`;

export const EmptyListText = styled.Text`
  color: #333333;
  font-family: 'Montserrat-Medium';
  text-align: center;
`;

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const CollapseListIconContainer = styled.View`
  position: absolute;
  top: 30px;
  right: 30px;
`;
