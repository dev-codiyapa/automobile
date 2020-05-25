import React from "react";
import { Carousel, Row, Col, Button } from "antd";
import "./ProductFeature.component.css";
import { IProductFeatureProps, IProductFeatureState } from "./interfaces";

const ProductFeature: React.FC<IProductFeatureProps &
  IProductFeatureState> = props => {
  return (
    <>
      <div className="feature-product-content">
        <Row>
          <Col span={22} offset={1}>
            <p className="feature-product-heading">featured product</p>
            <p className="feature-content-heading">
              New athenaOne feature to highlight? it goes here.
            </p>
            <p>
              Big, bold, condensed, and unmistakably dramatic text is perhaps
              the most obvious use of text as a primary web design element. This
              year, we’re seeing hero images replaced by bold headlines that
              anchor homepages with brand names or messages.
            </p>
            <Button className="feature-product-btn">Read More</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductFeature;
