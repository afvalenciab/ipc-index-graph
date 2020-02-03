import React from 'react';
import { create } from 'react-test-renderer';
import CarouselItemData from '../CarouselItemData';
import ProviderMock from '../../__mocks__/ProviderMocks';

describe('CarouselItemData testing', () => {
  test('Match Snapshot', () => {
    const carouselItemData = create(
      <ProviderMock>
        <CarouselItemData />
      </ProviderMock>
    );
    expect(carouselItemData.toJSON()).toMatchSnapshot();
  });
});