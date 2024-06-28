interface BaseCoupon {
  title: string;
  couponType: number;
}

export interface PriorityCoupon extends BaseCoupon {
  priorityCouponId: number;
  stock: number;
  startDate: Date;
  endDate: Date;
  isFinished: boolean;
  hasCoupon: boolean;
}

export interface GeneralCoupon extends BaseCoupon {
  generalCouponId: number;
  hasCoupon: boolean;
}

export interface Coupons {
  priorityCoupon: PriorityCoupon[];
  generalCoupon: GeneralCoupon[];
}

export interface MyCoupon extends BaseCoupon {
  couponId: number;
  isPriority: boolean;
}

export interface MyCoupons {
  myCoupons: MyCoupon[];
}
