// import React from 'react';
// import {
//   Step,
//   Stepper,
//   StepLabel,
// } from 'material-ui/Stepper';
// import NavigationButtons from './NavigationButtons'

// class HorizontalLinearStepper extends React.Component {

//   state = {
//     finished: false,
//     stepIndex: 0,
//   };

//   handleNext = () => {
//     const {stepIndex} = this.state;
//     this.setState({
// 			stepIndex: stepIndex + 1,
// 			finished: stepIndex >= this.props.dialog.length-1,
//     });
//   };

//   handlePrev = () => {
//     const {stepIndex} = this.state;
//     if (stepIndex > 0) {
//       this.setState({stepIndex: stepIndex - 1});
//     }
//   };

//   getStepContent(stepIndex) {
// 		return this.props.dialog[stepIndex].message;
//   }

//   render() {
//     const {stepIndex, finished} = this.state;
//     const contentStyle = {margin: '0 16px'};

//     return (
//       <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
//         <Stepper activeStep={stepIndex}>
//           {this.props.dialog.map((item, index) => {
// 						return (<Step key={index}>
// 							<StepLabel>{item.stepLabel}</StepLabel>
// 						</Step>)
// 					})}
//         </Stepper>
//         <div style={contentStyle}>
//           {finished ? (
//             <p>
//               <a
//                 href="#"
//                 onClick={(event) => {
//                   event.preventDefault();
//                   this.setState({stepIndex: 0, finished: false});
//                 }}
//               >
//                 Click here
//               </a> to reset the ceremony.
//             </p>
//           ) : (
//             <div>
//               <p>{this.getStepContent(stepIndex)}</p>
// 							<NavigationButtons 
// 								handleNext={this.handleNext}
// 								handlePrev={this.handlePrev}
// 								stepsSize={this.props.dialog.length} 
// 								stepIndex={stepIndex}/>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default HorizontalLinearStepper;