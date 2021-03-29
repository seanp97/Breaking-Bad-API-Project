import React, { Component } from 'react'

class BreakingBad extends Component {

    constructor() {
        super();
        this.state = { 
          breakingBadData: [],
          loading: true
        };
    }

    async componentDidMount() {
        this.fetchBBData();
    }

    fetchBBData = async () => {
        const BBResults = await fetch('https://breakingbadapi.com/api/characters');
        const data = await BBResults.json();
        this.setState({ breakingBadData: data });
        this.setState({ loading: false });
    }

    render() {
        return (
            <div className="container breakingWrapper">
                {!this.state.breakingBadData || this.state.loading ? (<h5>Loading...</h5>) : 
                    (<div>
                        {this.state.breakingBadData.map((item)  => {
                            return(
                                <div className="single-item">
                                    <h2>{item.name}</h2>
                                    <h2>Nickname: {item.nickname}</h2>
                                    <h4>Birthday: {item.birthday}</h4>
                                    <h4>Occupation: {item.occupation} </h4>
                                    <h4>Status: {item.status}</h4>
                                    <h4>Appearance: {item.appearance}</h4>
                                    <h4>Portrayed by: {item.portrayed}</h4>
                                    <img src={item.img} />
                                </div>
                            )
                        })}
                    </div>)
                }

            </div>
        )
    }
}

export default BreakingBad;
