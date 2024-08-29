import React, { useState } from 'react';


function Calculator() {
    const [n1, setN1] = useState<number>(0);
    const [n2, setN2] = useState<number>(0);

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Simple Sum Calculator</h3>
                                <div className="mb-3">
                                    <label className="form-label">Number 1</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={evt => setN1(parseInt(evt.target.value) || 0)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Number 2</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={evt => setN2(parseInt(evt.target.value) || 0)} />
                                </div>
                                <div className="text-center">
                                    <label className="display-1 fw-bold">
                                        {n1 + n2}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}


export default Calculator;