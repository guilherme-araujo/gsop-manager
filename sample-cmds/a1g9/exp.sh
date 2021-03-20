#!/bin/bash

#SBATCH --job-name=a1g9
#SBATCH --mem=96000
#SBATCH --cpus-per-task=48
##SBATCH --hint=compute_bound
#SBATCH --mail-user=guilherme.araujo@imd.ufrn.br
#SBATCH --mail-type=ALL
#SBATCH --time=2-0:0

#module load softwares/python/3.6-anaconda-5.0.1
#module load compilers/gnu/7.3

FILE=gsop

if [ -f "$FILE" ]; then

	echo "$FILE exists"

	touch job-over.txt
	echo "scale=2; 0/10" | bc > job-percent.txt
	for i in $(seq 1 10);
	do
		python3 main.py --operation=newGraph --graphtype=ba --numNodes=200 --numEdges=4
		./$FILE samples 500 ephBonus 0.01 ephBonusB 0.09 ephStartRatio 0.6 ephBuildingRatio 0.6666 ephReusingRatio 0.1666 ephPopHistory 0 threads 4 cycles 5000 ephTime 30 ni 0 sampleId $i printPartials 1 rBMA 9 rBMB 0.1111 bBA 0.95 bBB 0.95 >> a1g9.txt
		echo "scale=2; $i/1000" | bc > job-percent.txt
	done

	echo 1 > job-over.txt

else
    echo "$FILE not found."
fi
