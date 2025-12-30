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

it("jasmine matcher-toBeNull",()=>{

  var nullValue= null;
  var valueUndefined;
  var notNull="notNull";

  expect(null).toBeNull();
  expect(nullValue).toBeNull();
  expect(valueUndefined).not.toBeNull();
  expect(notNull).not.toBeNull();
});

it("jasmine matcher-toContain",()=>{

  var MyArray =["jasmine","dotnetoffice","tutorials"];

      expect([1,2,3]).toContain(2);
      expect([1,2,3]).toContain(2,3);
      expect(MyArray).toContain("jasmine");
      expect([1,2,3]).not.toContain(4);
      expect(MyArray).not.toContain("dot");
  });




});
