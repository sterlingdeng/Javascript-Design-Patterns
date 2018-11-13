// Strategy Pattern

class TaxCalculator {
  constructor() {
    this._state = undefined;
    this._strategy = undefined;
    this._basis = undefined;
  }
  setState(state) {
    this._state = state;
    return this;
  }

  setStrategy(strategy) {
    this._strategy = strategy;
    return this;
  }
  setBasis(basis) {
    this._basis = basis;
    return this;
  }
  calculate() {
    // Validation
    if (!this._state) {
      return "State not specified";
    }
    if (!this._strategy) {
      return "Strategy not specificed";
    }
    if (!this._basis) {
      return "Basis not specified";
    }

    const basis = this._basis;
    const state = this._state;
    const strategy = this._strategy;

    const rate = state.getStrategyRate(strategy);

    return basis * rate;
  }
}

class State {
  constructor() {
    this._mappingTable = undefined;
  }
  getStrategyRate(strategy) {
    if (!this._mappingTable) {
      return "No dataset";
    }
    return this._mappingTable[strategy];
  }
  setData(data) {
    if (!data) {
      return "No data to set!";
    }
    this._mappingTable = data;
    return this;
  }
}

const randomIncome = () => {
  const max = 200000;
  const min = 100000;
  return Math.random() * (max - min) + min;
};

CaDataSet = {
  capitalGains: 0.3,
  property: 0.2,
  income: 0.4
};

GaDataSet = {
  capitalGains: 0.35,
  property: 0.15,
  income: 0.33
};

const CA = new State().setData(CaDataSet);
const GA = new State().setData(GaDataSet);

clientList = {
  Alex: { basis: randomIncome(), state: CA, strategy: "capitalGains" },
  Bob: { basis: randomIncome(), state: GA, strategy: "income" },
  Charlie: { basis: randomIncome(), state: GA, strategy: "capitalGains" },
  Denise: { basis: randomIncome(), state: CA, strategy: "property" },
  Eric: { basis: randomIncome(), state: GA, strategy: "capitalGains" },
  Frank: { basis: randomIncome(), state: CA, strategy: "income" }
};

for (client in clientList) {
  const [basis, state, strategy] = Object.values(clientList[client]);
  const tax = new TaxCalculator()
    .setState(state)
    .setBasis(basis)
    .setStrategy(strategy)
    .calculate();
  const output =
    client +
    " located in " +
    state +
    " owes " +
    tax +
    " in " +
    strategy +
    "tax";

  console.log(output);
}
