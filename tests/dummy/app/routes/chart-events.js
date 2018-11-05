import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return data;
  },

  setupController(controller, model) {
    this._super(controller, model);

    let data = model.map(function(record){
      return { region: record.region, item: record.item, total: record.total}
    })

    controller.set("jsonData", data);
  },
});

let data = [
  {
    order_date: "1/6/18",
    region: "East",
    rep: "Jones",
    item: "Pencil",
    units: 95,
    cost: 1.99,
    total: 189.05
  },
  {
    order_date: "1/23/18",
    region: "Central",
    rep: "Kivell",
    item: "Binder",
    units: 50,
    cost: 19.99,
    total: 999.5
  },
  {
    order_date: "2/9/18",
    region: "Central",
    rep: "Jardine",
    item: "Pencil",
    units: 36,
    cost: 4.99,
    total: 179.64
  },
  {
    order_date: "2/26/18",
    region: "Central",
    rep: "Gill",
    item: "Pen",
    units: 27,
    cost: 19.99,
    total: 539.73
  },
  {
    order_date: "3/15/18",
    region: "West",
    rep: "Sorvino",
    item: "Pencil",
    units: 56,
    cost: 2.99,
    total: 167.44
  },
  {
    order_date: "4/1/18",
    region: "East",
    rep: "Jones",
    item: "Binder",
    units: 60,
    cost: 4.99,
    total: 299.4
  },
  {
    order_date: "4/18/18",
    region: "Central",
    rep: "Andrews",
    item: "Pencil",
    units: 75,
    cost: 1.99,
    total: 149.25
  },
  {
    order_date: "5/5/18",
    region: "Central",
    rep: "Jardine",
    item: "Pencil",
    units: 90,
    cost: 4.99,
    total: 449.1
  },
  {
    order_date: "5/22/18",
    region: "West",
    rep: "Thompson",
    item: "Pencil",
    units: 32,
    cost: 1.99,
    total: 63.68
  },
  {
    order_date: "6/8/18",
    region: "East",
    rep: "Jones",
    item: "Binder",
    units: 60,
    cost: 8.99,
    total: 539.4
  },
  {
    order_date: "6/25/18",
    region: "Central",
    rep: "Morgan",
    item: "Pencil",
    units: 90,
    cost: 4.99,
    total: 449.1
  },
  {
    order_date: "7/12/18",
    region: "East",
    rep: "Howard",
    item: "Binder",
    units: 29,
    cost: 1.99,
    total: 57.71
  },
  {
    order_date: "7/29/18",
    region: "East",
    rep: "Parent",
    item: "Binder",
    units: 81,
    cost: 19.99,
    total: "1,619.19"
  },
  {
    order_date: "8/15/18",
    region: "East",
    rep: "Jones",
    item: "Pencil",
    units: 35,
    cost: 4.99,
    total: 174.65
  },
  {
    order_date: "9/1/18",
    region: "Central",
    rep: "Smith",
    item: "Desk",
    units: 2,
    cost: 125,
    total: 250
  },
  {
    order_date: "9/18/18",
    region: "East",
    rep: "Jones",
    item: "Pen Set",
    units: 16,
    cost: 15.99,
    total: 255.84
  },
  {
    order_date: "10/5/18",
    region: "Central",
    rep: "Morgan",
    item: "Binder",
    units: 28,
    cost: 8.99,
    total: 251.72
  },
  {
    order_date: "10/22/18",
    region: "East",
    rep: "Jones",
    item: "Pen",
    units: 64,
    cost: 8.99,
    total: 575.36
  },
  {
    order_date: "11/8/18",
    region: "East",
    rep: "Parent",
    item: "Pen",
    units: 15,
    cost: 19.99,
    total: 299.85
  },
  {
    order_date: "11/25/18",
    region: "Central",
    rep: "Kivell",
    item: "Pen Set",
    units: 96,
    cost: 4.99,
    total: 479.04
  },
  {
    order_date: "12/12/18",
    region: "Central",
    rep: "Smith",
    item: "Pencil",
    units: 67,
    cost: 1.29,
    total: 86.43
  },
  {
    order_date: "12/29/18",
    region: "East",
    rep: "Parent",
    item: "Pen Set",
    units: 74,
    cost: 15.99,
    total: "1,183.26"
  },
  {
    order_date: "1/15/19",
    region: "Central",
    rep: "Gill",
    item: "Binder",
    units: 46,
    cost: 8.99,
    total: 413.54
  },
  {
    order_date: "2/1/19",
    region: "Central",
    rep: "Smith",
    item: "Binder",
    units: 87,
    cost: 15,
    total: "1,305.00"
  },
  {
    order_date: "2/18/19",
    region: "East",
    rep: "Jones",
    item: "Binder",
    units: 4,
    cost: 4.99,
    total: 19.96
  },
  {
    order_date: "3/7/19",
    region: "West",
    rep: "Sorvino",
    item: "Binder",
    units: 7,
    cost: 19.99,
    total: 139.93
  },
  {
    order_date: "3/24/19",
    region: "Central",
    rep: "Jardine",
    item: "Pen Set",
    units: 50,
    cost: 4.99,
    total: 249.5
  },
  {
    order_date: "4/10/19",
    region: "Central",
    rep: "Andrews",
    item: "Pencil",
    units: 66,
    cost: 1.99,
    total: 131.34
  },
  {
    order_date: "4/27/19",
    region: "East",
    rep: "Howard",
    item: "Pen",
    units: 96,
    cost: 4.99,
    total: 479.04
  },
  {
    order_date: "5/14/19",
    region: "Central",
    rep: "Gill",
    item: "Pencil",
    units: 53,
    cost: 1.29,
    total: 68.37
  },
  {
    order_date: "5/31/19",
    region: "Central",
    rep: "Gill",
    item: "Binder",
    units: 80,
    cost: 8.99,
    total: 719.2
  },
  {
    order_date: "6/17/19",
    region: "Central",
    rep: "Kivell",
    item: "Desk",
    units: 5,
    cost: 125,
    total: 625
  },
  {
    order_date: "7/4/19",
    region: "East",
    rep: "Jones",
    item: "Pen Set",
    units: 62,
    cost: 4.99,
    total: 309.38
  },
  {
    order_date: "7/21/19",
    region: "Central",
    rep: "Morgan",
    item: "Pen Set",
    units: 55,
    cost: 12.49,
    total: 686.95
  },
  {
    order_date: "8/7/19",
    region: "Central",
    rep: "Kivell",
    item: "Pen Set",
    units: 42,
    cost: 23.95,
    total: "1,005.90"
  },
  {
    order_date: "8/24/19",
    region: "West",
    rep: "Sorvino",
    item: "Desk",
    units: 3,
    cost: 275,
    total: 825
  },
  {
    order_date: "9/10/19",
    region: "Central",
    rep: "Gill",
    item: "Pencil",
    units: 7,
    cost: 1.29,
    total: 9.03
  },
  {
    order_date: "9/27/19",
    region: "West",
    rep: "Sorvino",
    item: "Pen",
    units: 76,
    cost: 1.99,
    total: 151.24
  },
  {
    order_date: "10/14/19",
    region: "West",
    rep: "Thompson",
    item: "Binder",
    units: 57,
    cost: 19.99,
    total: "1,139.43"
  },
  {
    order_date: "10/31/19",
    region: "Central",
    rep: "Andrews",
    item: "Pencil",
    units: 14,
    cost: 1.29,
    total: 18.06
  },
  {
    order_date: "11/17/19",
    region: "Central",
    rep: "Jardine",
    item: "Binder",
    units: 11,
    cost: 4.99,
    total: 54.89
  },
  {
    order_date: "12/4/19",
    region: "Central",
    rep: "Jardine",
    item: "Binder",
    units: 94,
    cost: 19.99,
    total: "1,879.06"
  },
  {
    order_date: "12/21/19",
    region: "Central",
    rep: "Andrews",
    item: "Binder",
    units: 28,
    cost: 4.99,
    total: 139.72
  },
  {
    order_date: "",
    region: "",
    rep: "",
    item: "",
    units: "",
    cost: "",
    total: ""
  }
];
