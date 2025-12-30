import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
   let service: MathService;
 // let service!: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
   // service=new MathService();
  });

  it('should be created', () => {
   // pending();
    expect(service).toBeTruthy();
     //expect(service).toBeUndefined();
  });


  it('', function(){}); // default function writing

   it('should return sum total',()=>{
    let total =service.add(10,20);

    expect(total).toEqual(30);

   }); //new way of writing function



it("should return Quotient ",()=>{

  let Quotient = service.divide(10,2);
   expect(Quotient).toEqual(5);
});

});
