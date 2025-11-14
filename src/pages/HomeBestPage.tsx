import React from 'react';
import HomeBest from '../components/HomeBest';
import type { Product } from '../types';

type Props = {
	products?: Product[];
	images?: string[];
};

const HomeBestPage: React.FC<Props> = ({ products = [], images = [] }) => {
	return <HomeBest products={products} images={images} />;
};

export default HomeBestPage;
