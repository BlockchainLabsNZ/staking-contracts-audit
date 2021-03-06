import React from 'react'

class ProgressBar extends React.Component {
	componentDidUpdate () {
		this.refs['bar-content'].style.width = this.props.barPercentage + '%'
	}

	render () {
		return (
			<div className={`container ${this.props.className}`}>
				<br/>

				<div className="row align-items-center">
					<div className="col-md-1">
						Stake
					</div>
					<div className="col-md-9">
						{this.props.stakeAddress}
					</div>

					<div className="col-md-2 text-right update-button">
						<button className="btn btn-secondary"
							disabled={(!this.props.updateInitialInformation || this.props.account) ? false : true} onClick={() => {
								this.props.updateGetInfo()
							}}>{this.props.updateInitialInformation ? 'Updating...' : 'Update'}</button>
					</div>

					<div className="col-md-1">
						LEV
					</div>
					<div className="col-md-11">
						{this.props.levAddress}
					</div>
					<div className="col-md-1">
						FEE
					</div>
					<div className="col-md-11">
						{this.props.feeAddress}
					</div>
				</div>
				<div className="row bar no-gutters">
					<div className="bar-content" ref="bar-content">{this.props.barPercentage? this.props.barPercentage.toFixed(2): this.props.barPercentage}%</div>
				</div>

				<div className="row">
					<div className="col-2 bar-start-block">Start: {this.props.startBlock}</div>
					<div className="col-2 offset-8 bar-end-block">End: {this.props.endBlock}</div>
				</div>
			</div>
		)
	}
}

export default ProgressBar
